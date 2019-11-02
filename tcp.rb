require 'socket'

server = TCPServer.new 3000
i = 0
loop do
  client = server.accept
  p client
  client.puts "Hello #{Time.now} counter:#{i}"
  client.close
  i += 1
end