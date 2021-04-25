
module.exports = {
  novedades: (req, res) => {
    res.render("novedades", {
      title:"Novedades"
    })
  },
  armaTuPecera:(req,res)=>{
    res.render("armaTuPecera", {
      title:"Armá tu pecera",
    })
  }
}