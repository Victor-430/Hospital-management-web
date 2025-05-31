import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const ChatSupportCard = () => {
  return (
    <motion.div>
      <Card className="mt-4 bg-gray-50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-2">Need Help ?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our AI assistant for quick support
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
