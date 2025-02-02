import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';
import path from 'path';
import fs from 'fs';

// Azure Storage connection details
const AZURE_STORAGE_ACCOUNT_NAME = 'your_account_name';
const AZURE_STORAGE_ACCOUNT_KEY = 'your_account_key';
const AZURE_STORAGE_CONTAINER_NAME = 'your_container_name';

const sharedKeyCredential = new StorageSharedKeyCredential(AZURE_STORAGE_ACCOUNT_NAME, AZURE_STORAGE_ACCOUNT_KEY);
const blobServiceClient = new BlobServiceClient(`https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`, sharedKeyCredential);
const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

export const uploadImageToBlob = async (file: Express.Multer.File): Promise<string> => {
  const blobName = Date.now() + path.extname(file.originalname); // Use timestamp for unique filename
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  // Upload the file to Azure Blob Storage
  await blockBlobClient.uploadFile(file.path);

  // Generate a URL for the uploaded blob
  const url = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${AZURE_STORAGE_CONTAINER_NAME}/${blobName}`;
  
  // Clean up the local file after uploading
  fs.unlinkSync(file.path);

  return url;
};
