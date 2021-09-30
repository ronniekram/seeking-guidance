class Draw < ApplicationRecord
  has_many :card_draws, dependent: :destroy
  has_many :cards, through: :card_draws
end
