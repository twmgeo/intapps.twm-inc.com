import os
import csv

input_csv_file = r"P:\2023\230597\4 CADD - DWG\4.10 GIS\Exports\Taz_West.csv"
output_csv_file = r"P:\2023\230597\4 CADD - DWG\4.10 GIS\Exports\Taz_West_Final.csv"

with open(input_csv_file, 'r') as infile, open(output_csv_file, 'w', newline='') as outfile:
    # Create a CSV reader and writer
    csv_reader = csv.reader(infile)
    csv_writer = csv.writer(outfile)

    # Skip the first row (header)
    header = next(csv_reader)

    # Find the index of "OBJECTID"
    objectid_index = header.index("OBJECTID")

    # Write the header without "OBJECTID"
    new_header = [header[i] for i in range(len(header)) if i != objectid_index]
    csv_writer.writerow(new_header)

    # Write the remaining rows without the first column
    for row in csv_reader:
        new_row = [row[i] for i in range(len(row)) if i != objectid_index]
        csv_writer.writerow(new_row)

print("First row and column 'OBJECTID' removed and saved to", output_csv_file)
