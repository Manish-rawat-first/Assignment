import java.util.TreeMap;
import java.util.Map;
import java.util.Scanner;

public class Panagram {

    static Map<Character,Boolean> mp = new TreeMap<>();

    public static boolean isPanagram(String s){
        for(int i = 0;i<s.length();i++){
            char c = s.charAt(i);
            if((c >='A' && c<='Z')){
                mp.put(c,true);
            }
        }
        for(boolean b:mp.values()){
            if(b==false){
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        Scanner s1 = new Scanner(System.in);
        char ch = 'A';
        for(int i = 0;i<26;i++){
            mp.put(ch++,false);
        }
        String s;
        System.out.print("Enter Check String Panagram or Not:");
        s = s1.nextLine().toUpperCase();
        System.out.print((isPanagram(s)?"This is Panagram":"This is not a panagram"));
        s1.close();

    }
    
}
