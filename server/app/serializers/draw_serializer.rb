class DrawSerializer < ActiveModel::Serializer
  attributes :id, :question
  has_many :cards
end
