# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_29_132356) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_draws", force: :cascade do |t|
    t.bigint "card_id", null: false
    t.bigint "draw_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_card_draws_on_card_id"
    t.index ["draw_id"], name: "index_card_draws_on_draw_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "cardType"
    t.string "summary"
    t.string "image"
    t.string "upright"
    t.string "reversed"
    t.boolean "rightSide"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "draws", force: :cascade do |t|
    t.string "question"
    t.integer "num"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "card_draws", "cards"
  add_foreign_key "card_draws", "draws"
end
