import { MessageRequest, CreateFeedbackRequest, UpdateFeedbackRequest, UpsertRequest, LeadCaptureRequest } from './sendMessageQuery';
export declare const sendMessageQuery: ({ apiHost, body, onRequest }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const createAttachmentWithFormData: ({ apiHost, formData, onRequest }: UpsertRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
export declare const upsertVectorStoreWithFormData: ({ apiHost, formData, onRequest }: UpsertRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
export declare const getChatbotConfig: ({ apiHost, onRequest }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const isStreamAvailableQuery: ({ apiHost, onRequest }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const sendFileDownloadQuery: ({ apiHost, body, onRequest }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const addLeadQuery: ({ apiHost, body, onRequest }: LeadCaptureRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const sendFeedbackQuery: ({ apiHost, body, onRequest }: CreateFeedbackRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
export declare const updateFeedbackQuery: ({ id, apiHost, body, onRequest }: UpdateFeedbackRequest) => Promise<{
    data?: unknown;
    error?: Error | undefined;
}>;
//# sourceMappingURL=customBackendQuery.d.ts.map