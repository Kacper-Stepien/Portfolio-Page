import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useState } from "react";
import InputErrorMessage from "../ui/InputErrorMessage";

interface FormInputs {
  name: string;
  surname: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<FormInputs>({
    mode: "onBlur",
  });

  const [globalError, setGlobalError] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setGlobalError(false);
    const formData = {
      name: data.name,
      surname: data.surname,
      message: data.message,
      recipient: "kacper2007x48@gmail.com",
      sender: "Strona portfolio",
    };
    try {
      const response = await fetch(
        "https://send-email-api-bwq8.onrender.com/send-email",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        setValue("name", "");
        setValue("surname", "");
        setValue("message", "");
      }
    } catch (error) {
      setGlobalError(true);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 text-light w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          isError={!!errors.name}
          register={register}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name is too short (min 3 characters)",
            },
          }}
        />
        {errors.name && (
          <InputErrorMessage>{errors.name.message}</InputErrorMessage>
        )}
      </div>
      <div>
        <Input
          name="surname"
          type="text"
          placeholder="Surname"
          isError={!!errors.surname}
          register={register}
          rules={{
            required: "Surname is required",
            minLength: {
              value: 3,
              message: "Surname is too short (min 3 characters)",
            },
          }}
        />
        {errors.surname && (
          <InputErrorMessage>{errors.surname.message}</InputErrorMessage>
        )}
      </div>
      <div>
        <Input
          name="message"
          type="text"
          placeholder="Message"
          isError={!!errors.message}
          register={register}
          rules={{
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message is too short (min 10 characters)",
            },
          }}
          textarea={true}
        />
        {errors.message && (
          <InputErrorMessage>{errors.message.message}</InputErrorMessage>
        )}
      </div>
      <button
        className={`w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-semibold transition-transform ${
          !isValid || isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : "hover:scale-105"
        }`}
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "Submitting..." : isSubmitted ? "Submitted!" : "Submit"}
      </button>
      {globalError && (
        <InputErrorMessage>
          Something went wrong. Please try again.
        </InputErrorMessage>
      )}
    </form>
  );
};

export default ContactForm;
