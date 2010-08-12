require 'sinatra'
require 'app'
require 'rack/hoptoad'
require 'backports'

use Rack::Hoptoad, 'a8841589e16784be0bed6a9cebed419b'


run Sinatra::Application