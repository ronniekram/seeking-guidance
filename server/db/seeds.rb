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
    cardType: card["cardType"],
    summary: card["summary"],
    image: card["image"],
    upright: card["meaning_up"],
    reversed: card["meaning_rev"],
    )
 end


Draw.create(question: "DOES OBSERVATION SERVE AS A FRIEND?", card_ids: [rand(1..26), rand(53..78), rand(27..52)])
Draw.create(question: "IF MEMORY IS OPEN-SOURCE DOES IT BELONG TO YOU?", card_ids: [rand(1..26), rand(53..78), rand(27..52)])
Draw.create(question: "DID TIME HAVE A DEVICE ENHANCING OUR SENSES?", card_ids: [rand(1..26), rand(53..78), rand(27..52)])
Draw.create(question: "WHAT IF WE COULD FIND RELIEF IN OTHERS’ EXPERIENCES?", card_ids: [rand(1..26), rand(53..78), rand(27..52)])
Draw.create(question: "HOW DO YOU HAVE TO APPEAR HUMAN TO THE REST OF THE STORY?", card_ids: [rand(1..26), rand(53..78), rand(27..52)])