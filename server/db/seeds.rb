# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cards = RestClient.get 'https://raw.githubusercontent.com/ronniekram/tarot-db/main/cards.json'

cards_array = JSON.parse(cards)['cards']

cards_array.each do |card|
    Card.create(
    name: card["name"],
    suit: card["suit"],
    cardType: card["cardType"],
    summary: card["summary"],
    image: card["image"],
    upright: card["meaning_up"],
    reversed: card["meaning_rev"],
    desc: card["desc"]
    )
 end