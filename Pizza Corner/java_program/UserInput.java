package java_program;
import javax.swing.*;
class UserInput {
    int a,b;
    UserInput(int a,int b){
        this.a = a;
        this.b = b;
        int sum = a+b;
        JOptionPane.showMessageDialog(null,"sum of"+" "+sum);
    }
}