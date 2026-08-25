import json
import os
import re
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()
supabase = create_client(os.environ.get('VITE_SUPABASE_URL'), os.environ.get('VITE_SUPABASE_ANON_KEY'))

res = supabase.table('hw_heroes').select('id, name').execute()
db_heroes = res.data

alex_heroes = [
    'Electra', 'Byrna', 'Fluffy', 'Cascade', 'Aidan', 'Adam', 'Amira', 'Augustus', 'Aurora', 
    'Dante', 'Guus', 'Heidi', 'Isaac', 'Iris', 'Ishmael', 'Julius', 'Krista', 'Lara Croft', 
    'Lyria', 'Nebula', 'Orion', 'Qing Mao', 'Rufus', 'Sebastian', 'Somna', 'Thea', 'Yasmine', 
    'Arachne', 'Astaroth', 'Celeste', 'Corvus', 'Dorian', 'Folio', 'Galahad', 'Helios', 
    'Jorgen', 'Kayla', 'Keira', 'Martha', 'Mojo', 'Morrigan', 'Mushy and Shroom', 'Polaris', 
    'Ninja Turtles', 'Andvari', 'Cleaver', 'Faceless', 'Fafnir', 'Jhu', 'Judge', 'Lars', 
    'Lian', 'Phobos', 'Satori', 'Alvanor', 'Artemis', 'Astrid and Lucas', 'Cornelius', 
    'Daredevil', 'Ginger', 'Jet', "K'arkh", 'Maya', 'Tristan', 'Chabba', 'Dark Star', 
    'Elmir', 'Fox', 'Kai', 'Lilith', 'Luther', 'Markus', 'Peppy', 'Ziri'
]

# Standardize IDs mapping
# e.g., 'Lara Croft' -> 'laracroft' or 'lara-croft'
def norm(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())

alex_norm_map = {}
for ah in alex_heroes:
    n = norm(ah)
    alex_norm_map[n] = ah
    # Also add known aliases
    if n == 'laracroft': alex_norm_map['laracroft'] = ah
    if n == 'mushyandshroom': alex_norm_map['mushy'] = ah
    if n == 'astridandlucas': alex_norm_map['astrid'] = ah

extra = []
for db_h in db_heroes:
    hid = db_h['id']
    n_hid = norm(hid)
    if n_hid not in alex_norm_map:
        extra.append(db_h)

print('EXTRA HEROES IN DB TO REMOVE:')
print(json.dumps(extra, ensure_ascii=False, indent=2))
