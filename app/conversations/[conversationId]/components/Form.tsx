'use client';

import useConversation from '@/app/hooks/useConversation';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { HiPhoto, HiPaperAirplane } from 'react-icons/hi2';
import MessageInput from './MessageInput';
import { CldUploadButton } from 'next-cloudinary';
import toast from 'react-hot-toast';

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data?.message === '' || data?.message === null || data?.message === undefined) {
      toast.error('Message is empty')
    } else {
      setValue('message', '', { shouldValidate: true });

      axios.post('/api/messages', {
        ...data,
        conversationId,
      });
    }
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result?.info?.secure_url,
      conversationId,
    });
  };

  return (
    <div className='p-4 bg-white border-t flex items-center gap-2 lg:"gap-4 w-full'>
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset='jf6jfqhm'
      >
        <HiPhoto size={30} className='text-sky-500' />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center gap-2 lg:gap-4 w-full'
      >
        <MessageInput
          id='message'
          register={register}
          errors={errors}
          placeholder='Write a message'
        />
        <button
          type='submit'
          className='rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition'
        >
          <HiPaperAirplane size={18} className='text-white' />
        </button>
      </form>
    </div>
  );
};

export default Form;
