require 'socket'

server = TCPServer.new 3000
loop do
  client = server.accept
  headers = []
  loop do
    header = client.gets.chomp
    break if header.empty?

    headers << header
  end
  p headers

  sleep 3

  client.puts 'HTTP/1.0 200 OK'
  client.puts 'Content-Type: text/plain'
  client.puts
  client.puts 'Hello'
  client.close
end

