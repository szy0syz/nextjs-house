import { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
// import { useMutation, gql } from "@apollo/client";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { Image } from "cloudinary-react";
// import { SearchBox } from "./searchBox";
// import {
//   CreateHouseMutation,
//   CreateHouseMutationVariables,
// } from "src/generated/CreateHouseMutation";
// import {
//   UpdateHouseMutation,
//   UpdateHouseMutationVariables,
// } from "src/generated/UpdateHouseMutation";
// import { CreateSignatureMutation } from "src/generated/CreateSignatureMutation";

interface IFormData {
  address: string;
  latitude: number;
  longitude: number;
  bedrooms: string;
  image: FileList;
}

interface IHouse {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  bedrooms: number;
  image: string;
  publicId: string;
}

interface IProps {
  house?: IHouse;
}

export default function HouseForm({}: IProps) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, setValue, errors, watch } = useForm<
    IFormData
  >({ defaultValues: {} });

  useEffect(() => {
    register({ name: "address" }, { required: "Please enter your address" });
    register({ name: "latitude" }, { required: true, min: -90, max: 90 });
    register({ name: "longitude" }, { required: true, min: -180, max: 180 });
  }, [register]);

  const handleCreate = async (data: IFormData) => {};

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    handleCreate(data);
    console.log(data);
  };

  return (
    <form className="max-w-xl py-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl">Add a New House</h1>

      <div className="mt-4">
        <label>Search for your address</label>
        {/* Search Field */}
        {errors.address && <p>{errors.address.message}</p>}
      </div>
    </form>
  );
}
