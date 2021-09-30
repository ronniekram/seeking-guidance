class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :cardType, :summary, :image, :upright, :reversed
end
