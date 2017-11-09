



function findById (req, res) {
    let itemToShow = req.params.id;
    res.json(arrayOfTips[itemToShow]);
}
export { findById }

      