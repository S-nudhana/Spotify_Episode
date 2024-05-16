const connection = require("../db/connect");

 const getEpisode = async(req , res) => {
    const podcastId = req.query.podcastId; 
    try {
        const dataQuery = await connection.promise().query(`SELECT * FROM c17_podcast_episodes WHERE show_id = ${podcastId}` );
        const data = dataQuery[0];
        if (!data) {
			return res.status(404).json({
				success: false,
				data: null,
				error: "Id not found",
			});
		}
		return res.json({
			success: true,
			data: data,
			error: null,
		});
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            data: null,
            error: error.message,
        })
    }
}
module.exports = getEpisode ;