package java_program;
import javax.swing.*;
import java.util.Scanner;
public class Main{
    public static void main(String[] args) {
        String a = JOptionPane.showInputDialog(null, "Enter number 1  ");
        double x= Double.parseDouble(a);
        String b = JOptionPane.showInputDialog(null, "Enter number 2         ");
        int y = Integer.parseInt(b);
        UserInput ui = new UserInput(x,y);   
    }
}