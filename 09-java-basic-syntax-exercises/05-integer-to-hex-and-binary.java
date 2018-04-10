import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int inputDecimal = Integer.parseInt(console.nextLine());
        System.out.println(Integer.toHexString(inputDecimal).toUpperCase());
        System.out.println(Integer.toBinaryString(inputDecimal));
    }
}
