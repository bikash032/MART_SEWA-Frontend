import { Button, Upload } from "antd";
import { ImageIcon } from "lucide-react";
import type { UploadProps } from "antd";

const UploadFile = () => {
  const props: UploadProps = {
    action: "https://httpbin.org/post", 
    listType: "picture",
    multiple: true,
    maxCount: 1,
  };

  return (
    <Upload {...props}>
      <Button
        className="!bg-cyan-700"
        type="primary"
        icon={<ImageIcon />}
      >
        Upload
      </Button>
    </Upload>
  );
};

export default UploadFile;
