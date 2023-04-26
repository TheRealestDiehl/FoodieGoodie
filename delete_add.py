import csv
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request
import json
import csv



aList = [41, 58, 63]
jsonStr = json.dumps(aList)


app = Flask(__name__)
CORS(app)

def readCsv():
    with open('items.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        data = list(spamreader)
        return data

@app.route("/checkout")
def login():
    itemID = request.args.get('itemID')
    name = request.args.get('name')
    quantity = request.args.get('quantity')
    price = request.args.get('price')
    print(itemID, name, quantity, price)
    data = readCsv()
    print("data", data)
    data.append([itemID + ',' + name + ',' + quantity + ',' + price])
    with open('items.csv', 'w') as f:
        for line in data:
            print("line to print --------", line)
            f.write(line[0])
            f.write('\n')
    f.close()
    return itemID

def add_item_to_csv(itemID, name, quantity, price):
    # Open the CSV file in append mode
    with open('items.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        # Write a new row to the CSV file with the provided data
        writer.writerow([itemID, name, quantity, price])

# Call the function to add a new item to the CSV file
itemID = '3'  # Replace with the actual itemID
name = 'Bananas'  # Replace with the actual name
quantity = '15'  # Replace with the actual price
price = 'Fruit'  # Replace with the actual category
add_item_to_csv(itemID, name, quantity, price)

def delete_item_from_csv(itemID):
    # Open the CSV file in read mode
    with open('items.csv', 'r') as file:
        reader = csv.reader(file)
        data = list(reader)

    # Find the row to delete based on the itemID
    for row in data:
        if row[0] == itemID:
            data.remove(row)
            break

    # Open the CSV file in write mode
    with open('items.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(data)

# Call the function to delete an item from the CSV file
item_id_to_delete = '1'  # Replace with the actual itemID to delete
delete_item_from_csv(item_id_to_delete)