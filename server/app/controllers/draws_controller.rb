class DrawsController < ApplicationController

  def index
    draws = Draw.all 
    if draws 
      render json: draws, include: [:cards] 
    else
      render json: { errors: draws.errors.full_messages.to_sentence, message: "We can't find any draws." }  
    end  
  end

  def show
    draw = Draw.find(params[:id])
    if draw
      render json: draw, include: [:cards]
    else 
      render json: { error: draw.errors.full_messages.to_sentence, message: "We can't find this draw." } 
    end 
  end 

  def create
    draw = Draw.create(draw_params)
    if draw.save
      render json: draw, include: [:cards] 
    else 
      render json: { error: draw.errors.full_messages.to_sentence } 
    end
  end

  private

  def draw_params
    params.permit(:question, :card_ids)
  end
end
