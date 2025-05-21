"use client";
import UserCard from "@/components/cards/UserCard";
import { useAppDispatch, useAppSelector } from "@/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { callAPI } from "@/lib/api";
import { useEffect, useState } from "react";
import { fetchLanguagesAndCategories } from "@/services/home";
import { artistStyles } from "./constants";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { clearCart } from "@/features/cartSlice";

const CartCheckout = () => {
  const cart = useAppSelector((state) => state.cart);
  const [style, setStyle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [script, setScript] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [languagesList, setLanguagesList] = useState<string[]>([]);
  useEffect(() => {
    fetchLanguagesAndCategories()
      .then((data) => {
        setLanguagesList(data.languages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createOrder = () => {
    // API call to create order
    if (cart.bookedArtists.length === 0) {
      alert("Please book an artist first");
      return;
    }
    cart.bookedArtists.map((artist) => {
      callAPI("/get/quotation", {
        method: "POST",
        data: {
          artistId: artist.id,
          language: language,
          style: style,
          script: script,
          category: category,
          instruction: instruction,
          email: email,
          artist_demo: artist.voice_samples[0].sample,
          status: "OPEN",
        },
      })
        .then(() => {
          toast({
            title: "Order Created",
            description: "Your order has been created successfully",
            variant: "success",
          });
          dispatch(clearCart());
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="pt-28 flex justify-center">
      <div className="p-5 lg:p-10 lg:flex gap-10 max-w-[1200px]  w-full">
        <div className="flex-1 border h-min mt-10 lg:mt-0">
          <div className="bg-gray-100 px-3 py-2 text-primary">
            Enter Your Details
          </div>
          <div className="p-4">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Style</Label>
                <Select
                  onValueChange={(value) => {
                    setStyle(value);
                  }}
                >
                  <SelectTrigger className="w-full focus-visible:ring-0">
                    <SelectValue placeholder="Select a Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Style</SelectLabel>
                      {artistStyles.map((style) => {
                        return (
                          <SelectItem key={style.value} value={style.value}>
                            {style.title}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email Id</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" focus-visible:ring-0"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="category">Category</Label>
                <Input
                  type="text"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  id="category"
                  placeholder="Category"
                  className=" focus-visible:ring-0"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Language</Label>
                <Select
                  onValueChange={(value) => {
                    setLanguage(value);
                  }}
                >
                  <SelectTrigger className="w-full focus-visible:ring-0">
                    <SelectValue placeholder="Select a languages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      {languagesList.map((lang, i) => {
                        return (
                          <SelectItem key={i} value={lang}>
                            {lang}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="script">Script</Label>
              <Textarea
                id="script"
                placeholder="Your Script"
                className=" focus-visible:ring-0"
                onChange={(e) => {
                  setScript(e.target.value);
                }}
              />
            </div>
            <div className="grid w-full  items-center gap-1.5 mt-5">
              <Label htmlFor="message">Your Instruction</Label>
              <Textarea
                id="message"
                placeholder="Your Instruction"
                className=" focus-visible:ring-0"
                onChange={(e) => {
                  setInstruction(e.target.value);
                }}
              />
            </div>
            {/* <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="company">Attachment</Label>
              <Input
                type="file"
                id="company"
                placeholder="Company"
                className=" focus-visible:ring-0"
              />
            </div> */}
            <div className="w-full flex justify-end mt-4">
              <Button variant="secondary" onClick={createOrder}>
                Submit for Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:max-w-[280px] border grid gap-5 p-3 mt-5 lg:mt-0">
          {cart.bookedArtists.map((artist) => {
            return <UserCard details={artist} isBooked key={artist.id} />;
          })}
          {/* {new Array(cart).fill("_").map((_, i) => {
            return ;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
