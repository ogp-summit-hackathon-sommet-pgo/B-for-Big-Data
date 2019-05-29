import geopandas as gpd

neighbourhoods = gpd.read_file("data/neighbourhoods.geojson")
green_spaces = gpd.read_file("data/green_spaces.geojson")
transit_shelters = gpd.read_file("data/transit_shelters.geojson")
bike_parking = gpd.read_file("data/bycicle_parking.geojson")

neighbourhoods["num_shelter"] = 0

for i, shelter_geo in enumerate(transit_shelters["geometry"]):
  for j, neighbourhood_geo in enumerate(neighbourhoods["geometry"]):
    if shelter_geo.within(neighbourhood_geo):  
      neighbourhoods["num_shelter"].at[j] += 1

print(neighbourhoods)