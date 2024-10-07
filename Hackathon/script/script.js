// Image data for each state
const images = {
     "all-india": ["images/india/download.png", "images/india/download (1).png", "images/india/download (2).png", "images/india/download (3).png", "images/india/download (4).png" ,"images/india/download (5).png"],
      "andhra-pradesh": ["images/andhra/download (6).png", "images/andhra/download (1).png", "images/andhra/download (2).png", "images/andhra/download (3).png", "images/andhra/download (4).png", "images/andhra/download.png"],
      "arunachal-pradesh": ["images/arunachal/download.png", "images/arunachal/download (1).png", "images/arunachal/download (2).png", "images/arunachal/download (3).png", "images/arunachal/download (4).png", "images/arunachal/download (5).png"],
      "assam": ["images/assam/download.png", "images/assam/download (1).png", "images/assam/download (2).png", "images/assam/download (3).png", "images/assam/download (4).png", "images/assam/download (6).png"],
      "bihar": ["images/bihar/download.png", "images/bihar/download (1).png", "images/bihar/download (2).png", "images/bihar/download (3).png", "images/bihar/download (4).png", "images/bihar/download (5).png"],
      "chhattisgarh": ["images/chhattisgarh/download.png", "images/chhattisgarh/download (1).png", "images/chhattisgarh/download (2).png", "images/chhattisgarh/download (3).png", "images/chhattisgarh/download (4).png", "images/chhattisgarh/download (6).png"],
      "goa": ["images/goa/download.png", "images/goa/download (1).png", "images/goa/download (2).png", "images/goa/download (3).png", "images/goa/download (4).png", "images/goa/download (5).png"],
      "gujarat": ["images/gujarat/download.png", "images/gujarat/download (1).png", "images/gujarat/download (2).png", "images/gujarat/download (3).png", "images/gujarat/download (4).png", "images/gujarat/download (5).png"],
      "haryana": ["images/haryana/download.png", "images/haryana/download (1).png", "images/haryana/download (2).png", "images/haryana/download (3).png", "images/haryana/download (4).png", "images/haryana/download (5).png"],
      "himachal-pradesh": ["images/himachal/download.png", "images/himachal/download (1).png", "images/himachal/download (2).png", "images/himachal/download (3).png", "images/himachal/download (4).png", "images/himachal/download (5).png"],
      "jharkhand": ["images/jharkhand/download.png", "images/jharkhand/download (1).png", "images/jharkhand/download (2).png", "images/jharkhand/download (3).png", "images/jharkhand/download (4).png", "images/jharkhand/download (5).png"],
      "karnataka": ["images/karnataka/download.png", "images/karnataka/download (1).png", "images/karnataka/download (2).png", "images/karnataka/download (3).png", "images/karnataka/download (4).png", "images/karnataka/download (5).png"],
      "kerala": ["images/kerala/download.png", "images/kerala/download (1).png", "images/kerala/download (2).png", "images/kerala/download (3).png", "images/kerala/download (4).png", "images/kerala/download (5).png"],
      "madhya-pradesh": ["images/madhya/download.png", "images/madhya/download (1).png", "images/madhya/download (2).png", "images/madhya/download (3).png", "images/madhya/download (4).png", "images/madhya/download (5).png"],
      "maharashtra": ["images/maharashtra/download.png", "images/maharashtra/download (1).png", "images/maharashtra/download (2).png", "images/maharashtra/download (3).png", "images/maharashtra/download (4).png", "images/maharashtra/download (5).png"],
      "manipur": ["images/manipur/download.png", "images/manipur/download (1).png", "images/manipur/download (2).png", "images/manipur/download (3).png", "images/manipur/download (4).png", "images/manipur/download (5).png"],
      "meghalaya": ["images/meghalaya/download.png", "images/meghalaya/download (1).png", "images/meghalaya/download (2).png", "images/meghalaya/download (3).png", "images/meghalaya/download (4).png", "images/meghalaya/download (5).png"],
      "mizoram": ["images/mizoram/download.png", "images/mizoram/download (1).png", "images/mizoram/download (2).png", "images/mizoram/download (3).png", "images/mizoram/download (4).png", "images/mizoram/download (5).png"],
      "nagaland": ["images/nagaland/download.png", "images/nagaland/download (1).png", "images/nagaland/download (2).png", "images/nagaland/download (3).png", "images/nagaland/download (4).png", "images/nagaland/download (5).png"],
      "odisha": ["images/odisha/download.png", "images/odisha/download (1).png", "images/odisha/download (2).png", "images/odisha/download (3).png", "images/odisha/download (4).png", "images/odisha/download (5).png"],
      "punjab": ["images/punjab/download.png", "images/punjab/download (1).png", "images/punjab/download (2).png", "images/punjab/download (3).png", "images/punjab/download (4).png", "images/punjab/download (5).png"],
      "rajasthan": ["images/rajasthan/download.png", "images/rajasthan/download (1).png", "images/rajasthan/download (2).png", "images/rajasthan/download (3).png", "images/rajasthan/download (4).png", "images/rajasthan/download (5).png"],
      "sikkim": ["images/sikkim/download.png", "images/sikkim/download (1).png", "images/sikkim/download (2).png", "images/sikkim/download (3).png", "images/sikkim/download (4).png", "images/sikkim/download (5).png"],
      "tamil-nadu": ["images/tamil/download.png", "images/tamil/download (1).png", "images/tamil/download (2).png", "images/tamil/download (3).png", "images/tamil/download (4).png", "images/tamil/download (5).png"],
      "telangana": ["images/telangana/download.png", "images/telangana/download (1).png", "images/telangana/download (2).png", "images/telangana/download (3).png", "images/telangana/download (4).png", "images/telangana/download (5).png"],
      "tripura": ["images/tripura/download.png", "images/tripura/download (1).png", "images/tripura/download (2).png", "images/tripura/download (3).png", "images/tripura/download (4).png", "images/tripura/download (5).png"],
      "uttar-pradesh": ["images/uttar-pradesh/download.png", "images/uttar-pradesh/download (1).png", "images/uttar-pradesh/download (2).png", "images/uttar-pradesh/download (3).png", "images/uttar-pradesh/download (4).png", "images/uttar-pradesh/download (5).png"],
      "uttarakhand": ["images/uttarakhand/download.png", "images/uttarakhand/download (1).png", "images/uttarakhand/download (2).png", "images/uttarakhand/download (3).png", "images/uttarakhand/download (4).png", "images/uttarakhand/download (5).png"],
      "west-bengal": ["images/west-bengal/download.png", "images/west-bengal/download (1).png", "images/west-bengal/download (2).png", "images/west-bengal/download (3).png", "images/west-bengal/download (4).png", "images/west-bengal/download (5).png"],
      
      // Union Territories
      "andaman-nicobar": ["images/andaman/download.png", "images/andaman/download (1).png", "images/andaman/download (2).png", "images/andaman/download (3).png", "images/andaman/download (4).png", "images/andaman/download (5).png"],
      "chandigarh": ["images/chandigarh/download.png", "images/chandigarh/download (1).png", "images/chandigarh/download (2).png", "images/chandigarh/download (3).png", "images/chandigarh/download (4).png", "images/chandigarh/download (5).png"],
      "dadra-nagar-haveli": ["images/dadra/download.png", "images/dadra/download (1).png", "images/dadra/download (2).png", "images/dadra/download (3).png", "images/dadra/download (4).png", "images/dadra/download (5).png"],
      "daman-diu": ["images/daman/download.png", "images/daman/download (1).png", "images/daman/download (2).png", "images/daman/download (3).png", "images/daman/download (4).png", "images/daman/download (5).png"],
      "delhi": ["images/delhi/download.png", "images/delhi/download (1).png", "images/delhi/download (2).png", "images/delhi/download (3).png", "images/delhi/download (4).png", "images/delhi/download (5).png"],
      "lakshadweep": ["images/lakshadweep/download.png", "images/lakshadweep/download (1).png", "images/lakshadweep/download (2).png", "images/lakshadweep/download (3).png", "images/lakshadweep/download (4).png", "images/lakshadweep/download (5).png"],
      "puducherry": ["images/puducherry/download.png", "images/puducherry/download (1).png", "images/puducherry/download (2).png", "images/puducherry/download (3).png", "images/puducherry/download (4).png", "images/puducherry/download (5).png"]
  };
  
  // Function to update displayed images based on selected state
  function updateImages() {
    const stateSelect = document.getElementById("stateSelect");
    const selectedState = stateSelect.value;
    const imageContainer = document.getElementById("image-container");
  
    // Clear the container first
    imageContainer.innerHTML = "";
  
    // Get the images for the selected state
    const stateImages = images[selectedState];
  
    // Loop through each image and add it to the container
    stateImages.forEach((imgSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.classList.add("state-image"); // Add class for styling
      imageContainer.appendChild(imgElement);
    });
  }
  
  // Initial call to load the first state's images
  document.addEventListener("DOMContentLoaded", function () {
    updateImages(); // Call the function on page load to display default state images
  });
  