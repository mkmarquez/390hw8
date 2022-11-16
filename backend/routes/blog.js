import express from "express";

import {BlogModel} from "../schema/blog.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // find blogs based on no condition==> get all blogs
  const blogs = await BlogModel.find({});
  // convert each blog to an object and send an array to client
  return res.send(blogs.map((blog) => blog.toObject()));
});

router.post("/create-post", async (req, res) => {
  // body should be JSON
  const body = req.body;
  // create blog model with the request body
  const blog = new BlogModel({content: body.content, title: body.title});
  // remember to await .save();
  // save to mongodb
  await blog.save();
  // get an object representation and send it back to the client
  return res.send(blog.toObject());
});

router.post("/remove-post", async (req, res) => { //add handling if title doesnt exist
  const id = await BlogModel.findOneAndDelete({ title: req.body.title });
  const blogs = await BlogModel.find({});
  return res.send(blogs.map((blog) => blog.toObject()));
});

router.post("/update-post", async (req, res) => { //add handling if title doesnt exist
  console.log("hi")
  const blog = await BlogModel.findOneAndUpdate({ title: req.body.title, content: req.body.content });
  //await blog.save();
  const blogs = await BlogModel.find({});
  return res.send(blogs.map((blog) => blog.toObject()));
});

export default router;
