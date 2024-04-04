import express from "express";
import cors from "cors";
import multer from "multer";
import userRouter from "./routes/user";
import errorHandler from "./middleware/errorHandler";
import corsOptions from "./config/corsOptions";
import "dotenv/config";
import "./config/DatabaseConfig";
import donationRouter from "./routes/donation";
import orderRouter from "./routes/order";
import recipientRouter from "./routes/recipient";


const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Use cors middleware with custom options
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add your middleware here if needed
// app.use(() => {
//   console.log("hello");
// });

app.use("/api/user", userRouter);
app.use("/api/donation", donationRouter);
app.use("/api/order", orderRouter);
app.use("/api/recipient", recipientRouter);

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use(errorHandler);

const PORT =  3000;
const HOST = "0.0.0.0"; // Change this to your correct IP address

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
