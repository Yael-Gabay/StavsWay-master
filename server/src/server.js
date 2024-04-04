"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const user_1 = __importDefault(require("./routes/user"));
const logEvents_1 = __importDefault(require("./middleware/logEvents"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
require("dotenv/config");
require("./config/DatabaseConfig");
const donation_1 = __importDefault(require("./routes/donation"));
const order_1 = __importDefault(require("./routes/order"));
const recipient_1 = __importDefault(require("./routes/recipient"));
const app = (0, express_1.default)();
app.use(logEvents_1.default);
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
// Use cors middleware with custom options
app.use((0, cors_1.default)(corsOptions_1.default));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Add your middleware here if needed
// app.use(() => {
//   console.log("hello");
// });
app.use("/api/user", user_1.default);
app.use("/api/donation", donation_1.default);
app.use("/api/order", order_1.default);
app.use("/api/recipient", recipient_1.default);
app.all("*", (req, res) => {
    res.status(404).send("Not Found");
});
app.use(errorHandler_1.default);
const PORT = 3000;
const HOST = "192.168.1.76"; // Change this to your correct IP address
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
