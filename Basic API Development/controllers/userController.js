const user = [
    {id:1, name:'Tanvir'},
    {id:2, name:'Alvi'}
];

const getalluser = (req, res) => {
    res.status(200).json(user);
}

const deleteuser = (req, res) => {
    res.status(200).json({message: 'User deleted successfully'});
}

const updateuser = (req,res)=> {
    res.status(200).json({message: 'User updated successfully'});
}

module.exports = {getalluser, deleteuser, updateuser};