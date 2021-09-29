class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :suit, :cardType, :summary, :image, :upright, :reversed, :desc
end
