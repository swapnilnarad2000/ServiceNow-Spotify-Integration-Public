var spotifyIntegrationUtil = Class.create();
spotifyIntegrationUtil.prototype = {
    initialize: function() {},

    getTrackById: function(id) {
        try {
            var r = new sn_ws.RESTMessageV2('Spotify Integration', 'Get A Tracks By ID');
            r.setStringParameterNoEscape('id', id);

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            responseBody = JSON.parse(responseBody);

            return JSON.stringify({
                "id": id,
                "name": responseBody.name.toString(),
                "spotify_url": responseBody.external_urls.spotify.toString(),
                "image_url": responseBody.album.images[0].url.toString(),
                "artist": responseBody.artists[0].name.toString(),
                "artist_url": responseBody.artists[0].external_urls.spotify.toString(),
                "release_date": responseBody.album.release_date.toString(),
                "album": responseBody.album.name.toString(),
                "album_url": responseBody.album.external_urls.spotify.toString(),
            });

        } catch (ex) {
            var message = ex.message;
        }
    },

    getAllTracks: function() {
        var grSpotifyTracks = new GlideRecord("u_spotify_tracks");
        grSpotifyTracks.addEncodedQuery("u_track_idISNOTEMPTY");
        grSpotifyTracks.query();

        var tracks = {
            "tracks": []
        };

        while (grSpotifyTracks.next()) {
            var id = grSpotifyTracks.u_track_id.split(':track:')[1].toString();
            var data = this.getTrackById(id);
            tracks.tracks.push(JSON.parse(data));
        }

        return JSON.stringify(tracks);

    },

    getTrackId: function(sys_id) {
        var grSpotifyTracks = new GlideRecord("u_spotify_tracks");
        grSpotifyTracks.addEncodedQuery("sys_id=" + sys_id);
        grSpotifyTracks.query();

        if (grSpotifyTracks.next()) {
            return grSpotifyTracks.u_track_id.toString();
        }
    },

    getPlaylistTracks: function(id) {
        var grSpotifyPlaylist = new GlideRecord("u_spotify_playlist");
        grSpotifyPlaylist.addEncodedQuery("u_spotify_id=" + id);
        grSpotifyPlaylist.query();

        var tracks = [];
        if (grSpotifyPlaylist.next()) {
            var ret_tracks = grSpotifyPlaylist.u_spotify_tracks.split(",");
            for (var i = 0; i < ret_tracks.length; i++) {
                tracks.push(JSON.parse(this.getTrackById(this.getTrackId(ret_tracks[i]).split(':track:')[1].toString())));
            }
        }

        return JSON.stringify(tracks);
    },

    getPlaylistName: function(id) {
        var grSpotifyPlaylist = new GlideRecord("u_spotify_playlist");
        grSpotifyPlaylist.addEncodedQuery("u_spotify_id=" + id);
        grSpotifyPlaylist.query();

        if (grSpotifyPlaylist.next()) {
            return grSpotifyPlaylist.u_playlist_name.toString();
        }
    },

    getPlaylists: function() {
        var grSpotifyPlaylist = new GlideRecord("u_spotify_playlist");
        grSpotifyPlaylist.addEncodedQuery("u_spotify_idISNOTEMPTY");
        grSpotifyPlaylist.query();

        var playlists = [];
        while (grSpotifyPlaylist.next()) {
            playlists.push({
                "name": grSpotifyPlaylist.u_playlist_name.toString(),
                "spotify_id": grSpotifyPlaylist.u_spotify_id.toString(),
				"created_by": grSpotifyPlaylist.sys_created_by.toString(),
				"created": grSpotifyPlaylist.sys_created_on.toString()
            });
        }

        return JSON.stringify(playlists);
    },

    getTop10Songs: function(region_playlist_id) {
        try {
			var playlist_id = region_playlist_id ? region_playlist_id : "37i9dQZEVXbMDoHDwVN2tF"; 
            var r = new sn_ws.RESTMessageV2('Spotify Integration', 'Get A Spotify Playlist');
            r.setStringParameterNoEscape('playlist_id', playlist_id);
            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

			var tracks = [];

			var objTracks = JSON.parse(responseBody).tracks.items;

			for(var i=0;i<12;i++){
				tracks.push(JSON.parse(this.getTrackById(objTracks[i].track.id)));
			}

			return JSON.stringify(tracks);
        } catch (ex) {
            var message = ex.message;
        }
    },

	

    type: 'spotifyIntegrationUtil'
};
