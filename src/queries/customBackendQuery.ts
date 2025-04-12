import { FileUpload, IAction } from '@/components/Bot';
import { sendRequest } from '@/utils/index';
import {
  IncomingInput,
  MessageRequest,
  FeedbackRatingType,
  FeedbackInput,
  CreateFeedbackRequest,
  UpdateFeedbackRequest,
  UpsertRequest,
  LeadCaptureRequest,
} from './sendMessageQuery';

// You can customize these endpoints based on your backend API structure
export const sendMessageQuery = ({ apiHost = 'https://your-custom-backend.com', body, onRequest }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/chat`, // Custom endpoint
    body,
    onRequest: onRequest,
  });

export const createAttachmentWithFormData = ({ apiHost = 'https://your-custom-backend.com', formData, onRequest }: UpsertRequest) =>
  sendRequest({
    method: 'POST',
    url: `${apiHost}/attachments/${formData.get('chatId')}`, // Custom endpoint
    formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onRequest: onRequest,
  });

export const upsertVectorStoreWithFormData = ({ apiHost = 'https://your-custom-backend.com', formData, onRequest }: UpsertRequest) =>
  sendRequest({
    method: 'POST',
    url: `${apiHost}/vector/upsert`, // Custom endpoint
    formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onRequest: onRequest,
  });

export const getChatbotConfig = ({ apiHost = 'https://your-custom-backend.com', onRequest }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/config`, // Custom endpoint
    onRequest: onRequest,
  });

export const isStreamAvailableQuery = ({ apiHost = 'https://your-custom-backend.com', onRequest }: MessageRequest) =>
  sendRequest<any>({
    method: 'GET',
    url: `${apiHost}/streaming`, // Custom endpoint
    onRequest: onRequest,
  });

export const sendFileDownloadQuery = ({ apiHost = 'https://your-custom-backend.com', body, onRequest }: MessageRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/file/download`, // Custom endpoint
    body,
    type: 'blob',
    onRequest: onRequest,
  });

export const addLeadQuery = ({ apiHost = 'https://your-custom-backend.com', body, onRequest }: LeadCaptureRequest) =>
  sendRequest<any>({
    method: 'POST',
    url: `${apiHost}/leads`, // Custom endpoint
    body,
    onRequest: onRequest,
  });

export const sendFeedbackQuery = ({ apiHost = 'https://your-custom-backend.com', body, onRequest }: CreateFeedbackRequest) =>
  sendRequest({
    method: 'POST',
    url: `${apiHost}/feedback`, // Custom endpoint
    body,
    onRequest: onRequest,
  });

export const updateFeedbackQuery = ({ id, apiHost = 'https://your-custom-backend.com', body, onRequest }: UpdateFeedbackRequest) =>
  sendRequest({
    method: 'PUT',
    url: `${apiHost}/feedback/${id}`, // Custom endpoint
    body,
    onRequest: onRequest,
  });
