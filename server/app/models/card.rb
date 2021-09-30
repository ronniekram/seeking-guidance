class Card < ApplicationRecord
  has_many :card_draws, dependent: :destroy
  has_many :draws, through: :card_draws
end
