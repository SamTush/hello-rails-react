# app/controllers/greetings_controller.rb
class GreetingsController < ApplicationController
  def random_greeting
    @greeting = Greeting.order('RANDOM()').first
    render json: { message: @greeting.message }
  end
end
