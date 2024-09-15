import pandas as pd

# Load product footprint CSV file
def load_footprint_data(csv_file):
    try:
        return pd.read_csv(csv_file)
    except FileNotFoundError:
        print(f"Error: CSV file '{csv_file}' not found.")
        return None

# Retrieve product footprint information
def get_footprint_data(product_name, footprint_data):
    # Normalize product name to avoid case sensitivity issues
    product_name = product_name.lower()

    # Search for a matching crop/product in the CSV
    matched_rows = footprint_data[footprint_data['Crop'].str.lower().str.contains(product_name, na=False)]
    
    if not matched_rows.empty:
        # If multiple matches, return the first one (you can modify this as needed)
        product_row = matched_rows.iloc[0]

        return {
            "Crop": product_row['Crop'],
            "Water Use (m³/kg)": product_row['Water Use (m³/kg)'],
            "Irrigation Type": product_row['Irrigation Type'],
            "Climate": product_row['Climate'],
            "Yield (tons/ha)": product_row['Yield (tons/ha)'],
            "Water-Saving Practices": product_row['Water-Saving Practices'],
            "Water Pollution (Grey Water) (m³/kg)": product_row['Water Pollution (Grey Water) (m³/kg)'],
            "Water Scarcity": product_row['Water Scarcity'],
            "Post-Harvest Processing (Liters/kg)": product_row['Post-Harvest Processing (Liters/kg)']
        }

    return None  # Return None if no match is found
