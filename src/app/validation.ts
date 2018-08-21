interface validationObj {
    password_message: string;
    username_message: string;
    status: boolean;
}

export class Validation {

    validationData: validationObj ={
        password_message: "",
        username_message: "",
        status: false,
    };

    public validation_username(username) { 
        if(username.match(/^.[a-zA-Z0-9亜-熙ぁ-んァ-ヶ]{1,20}$/)){//ここで正規表現を用いて入力チェックする
            this.validationData.username_message = "ok"
            this.validationData.status  = true
        }else{
            this.validationData.username_message = "記号はだめよ"
            this.validationData.status  = false
        }
        
    }
    public validation_password(password){
        if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)){       //ここで正規表現を用いて入力チェックする
            this.validationData.password_message = "ok"
            this.validationData.status  = true
        }else{
            this.validationData.password_message = "大文字小文字数字"
            this.validationData.status  = false
        }
    }

    public main(event){
        if(event.target.id=="username"){
            this.validation_username(event.target.value)
        }
        else if(event.target.id=="password"){
            this.validation_password(event.target.value)
        }
    }
  }
