import java.util.Scanner;
import static java.lang.Character.isDigit;

public class Main {

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String str = console.nextLine().toUpperCase();
        if (isDigit(str.charAt(0))) System.out.println("digit");
        else if ((str.equals("A") ) ||
                str.equals("E") ||
                str.equals("O") ||
                str.equals("U") ||
                str.equals("I")
                ) System.out.println("vowel");
        else System.out.println("other");
    }
}
