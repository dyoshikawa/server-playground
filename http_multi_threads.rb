require 'socket'

server = TCPServer.new 3000
loop do
  Thread.abort_on_exception = true

  Thread.start(server.accept) do |client|
    headers = []
    loop do
      header = client.gets.chomp
      break if header.empty?

      headers << header
    end
    # p headers

    sleep 3

    client.puts 'HTTP/1.0 200 OK'
    client.puts 'Content-Type: text/plain'
    client.puts
    client.puts 'Hello.'
    client.close
  end
end
