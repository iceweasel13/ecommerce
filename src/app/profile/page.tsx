import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const ProfilePage = () => {
  return (
    <div className="relative border-slate-300 mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="sticky top-0 bg-white z-10 flex flex-col pb-4 border-b-2">
        <h1 className="text-2xl font-semibold gap-4">
          Profile
        </h1>
        <p className="text-gray-500">
          Manage your profile information and email
          settings.
        </p>
      </div>
      <div className="min-h-screen flex mt-6">
        <Tabs defaultValue="profile" className="flex  ">
          <TabsList className="flex flex-col items-start gap-2 mr-8 mt-8 ">
            <TabsTrigger
              value="profile"
              className="px-16 items-start flex py-2 text-left rounded-md data-[state=active]:bg-gray-100"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="px-16 py-2 text-left data-[state=active]:bg-gray-100"
            >
              Orders
            </TabsTrigger>
          </TabsList>
          <div className="flex-grow">
            <TabsContent value="profile">
              <div className="p-4 border rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                  Profile Information
                </h2>
                <p>Make changes to your account here.</p>
              </div>
            </TabsContent>
            <TabsContent value="orders">
              <div className="p-4 border rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                  Order History
                </h2>
                <p>View your past orders here.</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
