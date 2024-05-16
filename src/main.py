import logging
import requests
from flask_cors import CORS, cross_origin
from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


logging.basicConfig(level=logging.DEBUG)
logging.getLogger('flask_cors').level = logging.DEBUG

@app.route("/")
def hello_world():
    print("Server Succesfully updated")
    return "<p>Don't worry, it's working</p>"

@app.route("/api/v0",methods=['POST'])
def process_task():
    config = request.json
    n = config.get('n', None)
    selected_set = config.get('set', None)

    cards = get_magic_cards(int(n), selected_set)
    if cards is None:
        return jsonify({'error': 'Cannot obtain data from the api'}), 500

    return jsonify({'cards': cards}), 200

def count_rarities(cards):
    rarity_count = {
        'Common': 0,
        'Uncommon': 0,
        'Rare': 0,
        'Mythic Rare': 0,
    }
    
    for card in cards:
        rarity = card.get('rarity', 'Unknown')
        if rarity in rarity_count:
            rarity_count[rarity] += 1

    return rarity_count

def get_magic_cards(num_cards, selected_set):
    cards = []
    while len(cards) < num_cards:
        response = requests.get(f'https://api.magicthegathering.io/v1/sets/{selected_set}/booster')
        if response.status_code == 200:
            data = response.json()
            cards.extend(data.get('cards', []))
        else:
            return None
    
    rarity_count = count_rarities(cards[:num_cards])

    return rarity_count

""" if __name__ == '_main_': """
app.run(port=8080)