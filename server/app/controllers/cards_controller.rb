class CardsController < ApplicationController

  def index
    cards = Card.all 
    if cards 
      render json: cards 
    else
      render json: { errors: cards.errors.full_messages.to_sentence }  
    end 
  end

end
