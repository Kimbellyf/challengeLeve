'use strict';

exports.post = (req,res,next) =>{
    res.status(201).send(req.body);
}
exports.get('/',(req,res,next) =>{
    res.status(200).send({
        title: "Node Store API",
        version :"0.0.1"
    });
});
exports.put('/:id',(req,res,next) =>{
    const id = req.params.id;
    res.status(201).send({
        id:id,
        item: req.body
    });
});
exports.delete('/',(req,res,next) =>{
    res.status(200).send(req.body);
})
