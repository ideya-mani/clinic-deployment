"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageToBlob = void 0;
const storage_blob_1 = require("@azure/storage-blob");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Azure Storage connection details
const AZURE_STORAGE_ACCOUNT_NAME = 'your_account_name';
const AZURE_STORAGE_ACCOUNT_KEY = 'your_account_key';
const AZURE_STORAGE_CONTAINER_NAME = 'your_container_name';
const sharedKeyCredential = new storage_blob_1.StorageSharedKeyCredential(AZURE_STORAGE_ACCOUNT_NAME, AZURE_STORAGE_ACCOUNT_KEY);
const blobServiceClient = new storage_blob_1.BlobServiceClient(`https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`, sharedKeyCredential);
const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);
const uploadImageToBlob = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const blobName = Date.now() + path_1.default.extname(file.originalname); // Use timestamp for unique filename
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    // Upload the file to Azure Blob Storage
    yield blockBlobClient.uploadFile(file.path);
    // Generate a URL for the uploaded blob
    const url = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${AZURE_STORAGE_CONTAINER_NAME}/${blobName}`;
    // Clean up the local file after uploading
    fs_1.default.unlinkSync(file.path);
    return url;
});
exports.uploadImageToBlob = uploadImageToBlob;
