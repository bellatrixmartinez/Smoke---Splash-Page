require 'rubygems'
require 'backports'
require 'sinatra'
require 'restclient'
require 'yaml'


enable :raise_errors

helpers do
  def partial(page)
    erb page, :layout => false
  end
end

get '/' do
  erb :index2
end

get '/empleo' do 
  erb :empleo
end

get '/mayorista' do
  erb :mayorista
end

get '/reciclables' do
  erb :reciclables
end

get '/compra' do 
  erb :form
end

post '/gracias' do
    if ENV['RACK_ENV'] == "production"
      create_lead('bellatrix:letmein123@admin.bolsitosdecolores.com/people') 
    else
      create_lead("ivan:i01210323@127.0.0.1:3000/people")      
    end
  erb :gracias
end

get '/gracias' do
  erb :gracias
end


def create_lead(url)
  begin
    RestClient.post url,
    :person => { 
      :account => "bolsitos",
      :nombre => params[:nombre], 
      :telefono => params[:telefono],
      :email => params[:email],
      :opportunities => {
        :cantidad => params[:cantidad],
        :colores => params[:colores],
        :notas => params[:notas],
        :tipo => params[:tipo]
        }  
      }
    puts "NEW LEAD"
  rescue => e
    raise  e
  end
  erb :gracias
end

