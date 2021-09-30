class DrawSerializer < ActiveModel::Serializer
  attributes :id, :question, :created_date
  has_many :cards

  def created_date
    object.created_at.strftime("asked %m/%d/%Y at %l:%M%P") 
  end
end
