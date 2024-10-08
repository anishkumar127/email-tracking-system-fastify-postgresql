export const readEmailSchema = {
    // $id: 'readEmailSchema',
    querystring: {
        type: 'object',
        properties: {
            emailUniqueId: { type: 'string' },
            userId: { type: 'string' },
            email:{type:'string'}
        },
        required: ['emailUniqueId', 'userId','email'],
    },
    // body: {
    //     type: 'object',
    //     properties: {
    //         emailId: { type: 'string' },
    //         userId: { type: 'string' },
    //     },
    //     required: ['emailId', 'userId'],
    // },
    response: {
        200: {
            type: 'string',
            content: {
                'image/gif': { schema: { type: 'string' } },
            },
        },
        400: {
            type: 'object',
            properties: {
                error: { type: 'string' },
            },
        },
        500: {
            type: 'object',
            properties: {
                error: { type: 'string' },
            },
        },
    },
};

export const pingSchema = {
    // $id: 'pingSchema',
    body: {
        type: 'object',
        properties: {
            emailUniqueId: { type: 'string' },
            userId: { type: 'string' },
        },
        required: ['emailUniqueId', 'userId'],
    },
    response: {
        200: {
            type: 'object',
            properties: {
                status: { type: 'string' },
            },
        },
        400: {
            type: 'object',
            properties: {
                error: { type: 'string' },
            },
        },
        404: {
            type: 'object',
            properties: {
                error: { type: 'string' },
            },
        },
        500: {
            type: 'object',
            properties: {
                error: { type: 'string' },
            },
        },
    },
};
