const getGoals = (req, res)=>{
    res.status(200).json({"messages": "Get goals"})
}

module.exports = {
    getGoals,
}