class CreateCardDraws < ActiveRecord::Migration[6.1]
  def change
    create_table :card_draws do |t|
      t.belongs_to :card, null: false, foreign_key: true
      t.belongs_to :draw, null: false, foreign_key: true

      t.timestamps
    end
  end
end
