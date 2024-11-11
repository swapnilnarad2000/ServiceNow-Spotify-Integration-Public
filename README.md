# ServiceNow-Spotify-Integration
ServiceNow REST Integration with Spotify 

1. This integration is done with the help of REST Message OOB functionality of ServiceNow.

2. Spotify Integration requires oAuth 2.0 authentication type.

3. The oAuth 2.0 requires client creds, auth URL, refresh URL to generate tokens for Authentication.

4. Apart from REST Message Creation this project involved creation of Widgets in ServiceNow alongside server side script include.

5. Functionalities include
   * Play Top Tracks globally and region from portal homepage.
   * Browse region-wise top tracks. 
   * Get Top Tracks Globally.
   * Get Top Track Region Wise - India.
   * Create Playlist in your Spotify Account using ServiceNow.
   * Update Playlist in your Spotify Account using ServiceNow.

7. To Install The Application
    * Create a developer account in Spotify. 
    * Setup your OAuth credentials, client ID, client secret, token URL, refresh URL, also provide oAuth Redirect URIs of your servicenow instance. 
    * Import Spotify Global Set vX.Y.Z first, accept any remote set update conflicts in preview and commit the update set.
    * Then import the Spotify App vX.Y.Z set and accept any remote set update conflicts in preview and commit the update set.
    * Visit the application registry module and update the Spotify Integrations and Spotify Integrations v2 records with your client ID and Secret, also update the oAuth Redirect URL instance prefix with your instance prefix.
    * Visit the Outbound Rest Message module and visit Spotify Integrations and Spotify Integrations v2 and click on Related Link "Get oAuth Token" and a pop up will open that will close automatically and you are all set.
    * If you receive some invalid response or error and pop up dont get closed automatically then you might have made some mistake during setting up Oauth credentials or redirect URIs etc.
    * Visit https://<instance_prefix>.service-now.com/spotify to see the created app.
### Note: To populate sample tracks and region-wise playlist data on the instance, head to respective list views of table and import the demo data provided. 
  
# Demo Video
https://github.com/user-attachments/assets/c2056cc0-82df-4206-870e-7f17f8bc2e8c

# Service Portal Home Page Menu
![image](https://github.com/user-attachments/assets/99a04293-4c5d-4be3-b067-3d6f32ea1a95)

# Spotify Regions Page
![image](https://github.com/user-attachments/assets/7b3bec14-b674-49ee-bd15-7cc2bf9399cf)

# Spotify Global Top Tracks Page
![image](https://github.com/user-attachments/assets/d6deb0af-2707-4f16-b426-4be4f171e66d)

# Spotify Global Top Tracks Page - Scroll
![image](https://github.com/user-attachments/assets/760005bc-ab23-468b-9bbc-a086e2928f28)

# Spotify India Top Tracks Page
![image](https://github.com/user-attachments/assets/2e58ad4f-aa04-4552-b8b7-82951b77e341)

# Spotify India Top Tracks Page - Scroll
![image](https://github.com/user-attachments/assets/2b18bc81-3964-4cfd-94da-a0bb68f3067a)

# Spotify Track Page
![image](https://github.com/user-attachments/assets/5bacd712-d590-421b-a645-1525033e3c02)

# Spotify System Tracks
![image](https://github.com/user-attachments/assets/f5b6f2d2-cc7b-486e-ab24-71873ffe4704)

# Spotify System Playlist List View
![image](https://github.com/user-attachments/assets/f07bb6c2-5ea3-4f76-ba43-5c65c9c78613)

# Spotify System Playlist Page
![image](https://github.com/user-attachments/assets/ead5e084-38fa-47d3-bb72-c7b5f6d3a8fc)



